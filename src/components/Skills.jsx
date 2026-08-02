import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { 
  Coffee, Leaf, Brain, Boxes, Database, Code2, Zap, Container, Cloud, GitBranch, Globe,
  Terminal, Check, Copy, Sparkles
} from "lucide-react";

const ICON_MAP = {
  Coffee, Leaf, Brain, Boxes, Database, Code2, Zap, Container, Cloud, GitBranch, Globe,
};

const CODE_SNIPPETS = {
  java: {
    title: "UserService.java (Spring Boot 3 + JWT)",
    code: `@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;

    @Transactional
    public AuthResponse register(RegisterRequest req) {
        if (userRepo.existsByEmail(req.getEmail()))
            throw new UserAlreadyExistsException("Email taken!");

        User user = User.builder()
                .name(req.getName())
                .email(req.getEmail())
                .password(encoder.encode(req.getPassword()))
                .role(Role.ROLE_USER)
                .build();

        userRepo.save(user);
        String token = jwtService.generateToken(user);
        return new AuthResponse(token, "Registered!");
    }
}`
  },
  microservices: {
    title: "ApiGatewayConfig.java (Spring Cloud Gateway)",
    code: `@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(
            RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user-service", r -> r
                .path("/api/v1/users/**")
                .filters(f -> f.circuitBreaker(
                    c -> c.setName("userCB")))
                .uri("lb://USER-SERVICE"))
            .route("order-service", r -> r
                .path("/api/v1/orders/**")
                .uri("lb://ORDER-SERVICE"))
            .build();
    }
}`
  },
  ai: {
    title: "ResumeAiService.java (Spring AI + Ollama)",
    code: `@Service
public class ResumeAiService {

    private final ChatClient chatClient;

    public ResumeAiService(ChatClient.Builder b) {
        this.chatClient = b.build();
    }

    public String analyzeResume(
            String resumeText, String role) {
        String prompt = """
            Analyze this resume for role: %s.
            Give ATS score & skill gaps.
            Resume: %s
            """.formatted(role, resumeText);

        return chatClient.prompt()
                .user(prompt)
                .call()
                .content();
    }
}`
  },
  docker: {
    title: "docker-compose.yml (Microservices)",
    code: `version: '3.8'
services:
  eureka-server:
    image: pradeep/eureka-server:latest
    ports:
      - "8761:8761"

  config-server:
    image: pradeep/config-server:latest
    ports:
      - "8888:8888"

  kafka:
    image: confluentinc/cp-kafka:latest
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_LISTENERS: >
        PLAINTEXT://kafka:9092`
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeCodeTab, setActiveCodeTab] = useState("java");
  const [copied, setCopied] = useState(false);

  const categories = ["All", "Backend", "AI & ML", "Database", "Messaging Queue", "DevOps", "Frontend"];

  const filteredSkills = activeTab === "All"
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(skill => skill.category.toLowerCase().includes(activeTab.toLowerCase()));

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="section-wrapper">
      <h2 className="section-title">
        Technical <span className="gradient-text">Skills & Stack</span>
      </h2>
      <p className="section-subtitle">
        Hands-on expertise in backend application engineering, cloud microservices architecture, and modern developer tools.
      </p>

      {/* Category Filter Pills — scrollable on mobile */}
      <div className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 whitespace-nowrap shrink-0 ${
              activeTab === cat
                ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
        {filteredSkills.map((skill, index) => {
          const IconComponent = ICON_MAP[skill.icon] || Code2;
          return (
            <div
              key={index}
              className="glass-panel p-4 sm:p-6 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="p-3 sm:p-4 rounded-2xl bg-purple-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300 mb-3 sm:mb-4 shadow-lg">
                <IconComponent size={26} />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{skill.name}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400 font-medium hidden sm:block">
                {skill.category}
              </span>
            </div>
          );
        })}
      </div>

      {/* Interactive Developer Playground / Code Terminal Mockup */}
      <div className="max-w-4xl mx-auto glass-panel border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-slate-900/90 px-4 sm:px-5 py-3 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Window dots + title */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5 truncate">
              <Terminal size={12} className="text-purple-400 shrink-0" />
              <span className="truncate">{CODE_SNIPPETS[activeCodeTab].title}</span>
            </span>
          </div>

          {/* Tab switcher + copy */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/5 overflow-x-auto gap-0.5">
              {[
                { key: "java", label: "Spring Boot" },
                { key: "microservices", label: "Gateway" },
                { key: "ai", label: "Spring AI" },
                { key: "docker", label: "Docker" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCodeTab(key)}
                  className={`px-2.5 sm:px-3 py-1 text-xs font-mono rounded whitespace-nowrap transition-all ${
                    activeCodeTab === key ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-md bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              title="Copy Code"
            >
              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            </button>
          </div>
        </div>

        {/* Code Content Window */}
        <div className="p-4 sm:p-6 bg-slate-950/90 font-['Fira_Code'] text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed min-h-[200px]">
          <pre>
            <code>{CODE_SNIPPETS[activeCodeTab].code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
