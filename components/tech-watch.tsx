import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Rss } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "L'évolution des ransomwares en 2025",
    date: "Janvier 2025",
    category: "Cybersécurité",
    summary:
      "Analyse des nouvelles techniques utilisées par les groupes de ransomware et les mesures de protection recommandées.",
    source: "ANSSI",
  },
  {
    title: "Zero Trust : le nouveau paradigme de sécurité",
    date: "Décembre 2024",
    category: "Réseaux",
    summary: "Comment l'architecture Zero Trust transforme la sécurité des réseaux d'entreprise.",
    source: "Cisco Blog",
  },
  {
    title: "Migration vers le cloud hybride",
    date: "Novembre 2024",
    category: "Cloud",
    summary: "Les bonnes pratiques pour réussir sa transition vers une infrastructure cloud hybride.",
    source: "Microsoft Azure",
  },
  {
    title: "Automatisation avec Ansible",
    date: "Octobre 2024",
    category: "Systèmes",
    summary: "Introduction à l'automatisation des tâches d'administration système avec Ansible.",
    source: "Red Hat",
  },
]

const categoryColors: Record<string, string> = {
  Cybersécurité: "bg-red-100 text-red-800",
  Réseaux: "bg-blue-100 text-blue-800",
  Cloud: "bg-cyan-100 text-cyan-800",
  Systèmes: "bg-green-100 text-green-800",
}

export function TechWatch() {
  return (
    <section id="veille" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Veille technologique</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ma veille sur les dernières actualités en cybersécurité, réseaux, systèmes et cloud
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card
              key={article.title}
              className="border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge className={categoryColors[article.category] || "bg-secondary text-secondary-foreground"}>
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{article.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{article.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Source : {article.source}</span>
                  <Link href="#" className="text-primary hover:text-accent flex items-center gap-1 text-sm font-medium">
                    Lire plus
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Rss className="h-4 w-4" />
            <span className="text-sm">Veille effectuée via Feedly, Twitter/X et blogs spécialisés</span>
          </div>
        </div>
      </div>
    </section>
  )
}
