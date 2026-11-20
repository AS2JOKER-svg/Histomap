import useDocumentTitle from '../lib/useDocumentTitle'
import { titresObtenus } from '../lib/aventure'
import { emplacementsJokers, niveau, prochainRang } from '../lib/xp'
import { etatSerie } from '../lib/progression'
import { aRevoirParSalle, chiffresProfil, pluriel, texteARevoir, texteSerie } from '../lib/profil'
import { PARCOURS_AVENTURE as P, useProgress } from '../store/progress'
import Icon from '../components/ui/Icon'
import { LigneLien } from '../components/profil/SousPage'
import { Sceau } from '../components/celebration/elements'

/**
 * Profil court (V3.1, sprint 32, maquette 14, décision 20) : niveau, rang, titre affiché, XP, série et jokers,
 * 3 chiffres (salles, étoiles, jours), puis 4 entrées : Collections, À revoir, Défis, Réglages.
 */
const aujourdhui = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
const SABLE = '#c9b48c' // texte secondaire sur l'encre (8:1)

export default function ProfilPage() {
  useDocumentTitle('Profil')
  const av = useProgress((s) => s.aventure)
  const chapters = useProgress((s) => s.chapters)
  const quizzes = useProgress((s) => s.quizzes)
  const jour = aujourdhui()
  const n = niveau(av.xp)
  const suivant = prochainRang(n.niveau)
  const titres = titresObtenus(P, av)
  const titre = titres.find((t) => t.id === av.titreAffiche)?.titre
  const serie = texteSerie(etatSerie(av.serie, jour), av.serie.record)
  const chiffres = chiffresProfil(P, av)
  const revoir = aRevoirParSalle(P, chapters, quizzes)
  const nombre = (x) => x.toLocaleString('fr-FR')

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="sr-only">Profil</h1>

      {/* Carte de profil, sur l'encre */}
      <div className="-mx-4 -mt-6 sm:mx-0 sm:mt-0 sm:rounded-xl2 px-4 pt-[18px] pb-4 flex flex-col gap-3.5" style={{ background: '#2a2118', color: '#f6efe2' }}>
        <div className="flex items-center gap-3.5">
          <span aria-hidden="true" className="shrink-0 rounded-full" style={{ boxShadow: '0 0 0 3px #e0c27a' }}>
            <Sceau niveau={n.niveau} taille={64} />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[.12em] text-gold">{titre ? `${n.rang} · niveau ${n.niveau}` : `Niveau ${n.niveau}`}</p>
            <p className="font-display text-[26px] font-bold leading-[1.1] text-balance">{titre ?? n.rang}</p>
          </div>
        </div>

        <div>
          <p className="flex justify-between gap-3 text-xs tabular-nums" style={{ color: SABLE }}>
            <span>{n.max ? `${nombre(av.xp)} XP · niveau maximum` : `${nombre(n.dansNiveau)} / ${nombre(n.pourSuivant)} XP`}</span>
            {suivant && <span className="text-right">{suivant.rang} au niveau {suivant.niveau}</span>}
          </p>
          <div aria-hidden="true" className="mt-1.5 h-1.5 rounded-full overflow-hidden" style={{ background: '#4a3d2c' }}>
            <div className="h-full rounded-full" style={{ background: '#e0c27a', width: n.max ? '100%' : `${(n.dansNiveau / n.pourSuivant) * 100}%` }} />
          </div>
        </div>

        <div className="flex items-center gap-2.5 px-3 py-2.5" style={{ background: '#3a2f22' }}>
          <Icon name="flame" size={26} className="shrink-0" style={{ color: '#e6966e' }} />
          <p className="flex-1 min-w-0">
            <span className="block font-bold">{serie.titre}</span>
            <span className="block text-xs" style={{ color: SABLE }}>{serie.detail}</span>
          </p>
          <p className="shrink-0 text-right">
            <span className="block font-bold text-gold">{pluriel(av.serie.jokers, 'joker')}</span>
            <span className="block text-xs" style={{ color: SABLE }}>sur {emplacementsJokers(n.niveau)} places</span>
          </p>
        </div>
      </div>

      {/* Trois chiffres */}
      <div className="mt-3.5 grid grid-cols-3 gap-2">
        <Chiffre valeur={chiffres.salles} label={chiffres.salles > 1 ? 'salles découvertes' : 'salle découverte'} />
        <Chiffre valeur={`${chiffres.etoiles} ★`} label={chiffres.etoiles > 1 ? 'étoiles' : 'étoile'} couleur="var(--carte-etoiles)" />
        <Chiffre valeur={chiffres.jours} label={chiffres.jours > 1 ? 'jours joués' : 'jour joué'} />
      </div>

      {/* Les quatre sous-pages */}
      <nav aria-label="Rubriques du profil" className="mt-3.5 border-t border-line">
        <LigneLien grande to="/profil/collections" icone="trophy" titre="Collections" detail={`Mondes, fils rouges et ${titres.length ? pluriel(titres.length, 'titre') : 'titres'}`} />
        <LigneLien grande to="/profil/a-revoir" icone="refresh" titre="À revoir" detail={texteARevoir(revoir, av.aRevoirJour === jour)} />
        <LigneLien grande to="/defis" icone="users" titre="Défis" detail="Par lien, à deux, quiz infini" />
        <LigneLien grande to="/profil/reglages" icone="settings" titre="Réglages" detail="Sons, vibrations, thème, notifications" />
      </nav>
    </section>
  )
}

function Chiffre({ valeur, label, couleur }) {
  return (
    <div className="card rounded-none p-2.5">
      <p className="font-display text-[28px] font-bold leading-none lining-nums text-ink" style={couleur ? { color: couleur } : undefined}>
        {valeur}
      </p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  )
}
