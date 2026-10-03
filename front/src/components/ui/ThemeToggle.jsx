import { usePreferences } from '../../store/preferences'
import Icon from './Icon'

export default function ThemeToggle() {
  const resolved = usePreferences((s) => s.resolved)
  const toggleTheme = usePreferences((s) => s.toggleTheme)
  const label = resolved === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre'

  return (
    <button type="button" onClick={toggleTheme} className="btn-icon" aria-label={label} title={label}>
      <Icon name={resolved === 'dark' ? 'sun' : 'moon'} />
    </button>
  )
}
