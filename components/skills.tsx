import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Terminal, Network, Server, Shield, Code } from "lucide-react"

const skillCategories = [
  {
    icon: Monitor,
    title: "Windows Server",
    skills: ["Active Directory", "GPO", "DNS", "DHCP", "Hyper-V", "IIS"],
  },
  {
    icon: Terminal,
    title: "Linux",
    skills: ["Debian", "Ubuntu Server", "Apache", "Nginx", "MySQL", "SSH"],
  },
  {
    icon: Network,
    title: "Réseaux",
    skills: ["VLAN", "Routage", "NAT", "VPN", "Firewall", "TCP/IP"],
  },
  {
    icon: Server,
    title: "Virtualisation",
    skills: ["VirtualBox", "VMware", "Proxmox", "Conteneurs", "Docker"],
  },
  {
    icon: Shield,
    title: "Sécurité",
    skills: ["Pare-feu", "Antivirus", "Sauvegardes", "SSL/TLS", "Audit"],
  },
  {
    icon: Code,
    title: "Scripting",
    skills: ["PowerShell", "Bash", "Python", "Batch", "Automatisation"],
  },
]

export function Skills() {
  return (
    <section id="competences" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Compétences</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mes compétences techniques acquises au cours de ma formation BTS SIO SISR
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
