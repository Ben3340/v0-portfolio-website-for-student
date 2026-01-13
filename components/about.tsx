import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Shield, Server } from "lucide-react"

const qualities = [
  {
    icon: Target,
    title: "Rigoureux",
    description: "Méthodique et précis dans l'exécution des tâches techniques",
  },
  {
    icon: Users,
    title: "Travail d'équipe",
    description: "Capacité à collaborer efficacement en environnement professionnel",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Sensibilisé aux enjeux de cybersécurité et aux bonnes pratiques",
  },
  {
    icon: Server,
    title: "Polyvalent",
    description: "Adaptable aux différentes technologies et environnements",
  },
]

export function About() {
  return (
    <section id="apropos" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">À propos</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Le BTS SIO Option SISR</h3>
              <p className="text-muted-foreground leading-relaxed">
                Le BTS Services Informatiques aux Organisations, option Solutions d'Infrastructure, Systèmes et Réseaux
                (SISR), forme des professionnels capables de gérer et d'administrer des infrastructures informatiques.
                Cette formation couvre l'installation, la configuration et la maintenance des serveurs, réseaux et
                systèmes de sécurité.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Objectifs professionnels</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Administrateur systèmes et réseaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Technicien cybersécurité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Responsable infrastructure IT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Consultant en systèmes d'information</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {qualities.map((quality) => (
              <Card key={quality.title} className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <quality.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground mb-2">{quality.title}</h4>
                  <p className="text-sm text-muted-foreground">{quality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
