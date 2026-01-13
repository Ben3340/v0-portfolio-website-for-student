import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">Bonjour, je suis</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Prénom Nom
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">Étudiant en BTS SIO – Option SISR</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Passionné par l'administration systèmes et réseaux, la cybersécurité et l'infrastructure IT. Je construis
              et sécurise les environnements informatiques de demain.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#projets">
                  Voir mes projets
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Me contacter</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-primary/10 rounded-full absolute -top-4 -left-4" />
              <div className="w-80 h-80 bg-accent/10 rounded-full absolute -bottom-4 -right-4" />
              <div className="relative w-72 h-72 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-bold">SISR</div>
                  <div className="text-sm mt-2 opacity-90">Systèmes & Réseaux</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
