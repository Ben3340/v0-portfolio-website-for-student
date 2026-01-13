import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Folder } from "lucide-react"

const projects = [
  {
    title: "Déploiement Active Directory",
    context: "TP",
    description:
      "Mise en place d'une infrastructure Active Directory complète avec gestion des utilisateurs, groupes et stratégies de groupe (GPO).",
    technologies: ["Windows Server", "Active Directory", "DNS", "DHCP", "GPO"],
  },
  {
    title: "Infrastructure LAMP sécurisée",
    context: "AP",
    description:
      "Configuration d'un serveur web Linux avec Apache, MySQL et PHP. Mise en place de certificats SSL et configuration du pare-feu.",
    technologies: ["Debian", "Apache", "MySQL", "PHP", "SSL/TLS", "iptables"],
  },
  {
    title: "Réseau VLAN et routage inter-VLAN",
    context: "TP",
    description: "Conception et configuration d'un réseau segmenté en VLANs avec routage inter-VLAN sur switch Cisco.",
    technologies: ["Cisco", "VLAN", "Routage", "Packet Tracer"],
  },
  {
    title: "Plateforme de virtualisation",
    context: "Personnel",
    description:
      "Création d'un environnement de virtualisation avec Proxmox pour héberger plusieurs machines virtuelles de test.",
    technologies: ["Proxmox", "KVM", "LXC", "Stockage réseau"],
  },
  {
    title: "Solution de sauvegarde automatisée",
    context: "TD",
    description:
      "Script PowerShell pour automatiser les sauvegardes incrémentales avec rotation et notification par email.",
    technologies: ["PowerShell", "Windows Server", "SMTP", "Planification"],
  },
  {
    title: "VPN Site-à-Site",
    context: "AP",
    description:
      "Configuration d'un tunnel VPN IPSec entre deux sites distants avec pfSense pour sécuriser les communications.",
    technologies: ["pfSense", "IPSec", "VPN", "Firewall"],
  },
]

const contextColors: Record<string, string> = {
  TP: "bg-blue-100 text-blue-800",
  TD: "bg-green-100 text-green-800",
  AP: "bg-amber-100 text-amber-800",
  Personnel: "bg-purple-100 text-purple-800",
}

export function Projects() {
  return (
    <section id="projets" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projets / TP</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations techniques effectuées en formation et à titre personnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <Badge className={contextColors[project.context] || "bg-secondary text-secondary-foreground"}>
                    {project.context}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors mt-3">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
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
