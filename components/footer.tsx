import Link from "next/link"
import { Server, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Server className="h-6 w-6" />
              <span className="font-semibold text-lg">Portfolio SISR</span>
            </div>
            <p className="text-background/70 text-sm">
              Portfolio étudiant BTS SIO option SISR - Administration systèmes et réseaux
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="#accueil" className="hover:text-background transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="hover:text-background transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#competences" className="hover:text-background transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="#projets" className="hover:text-background transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#veille" className="hover:text-background transition-colors">
                  Veille
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Réseaux</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} Prénom Nom - BTS SIO SISR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
