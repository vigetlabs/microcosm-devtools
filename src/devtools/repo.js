import Microcosm from 'microcosm'
import History from './domains/history'
import Events from './effects/events'

class Repo extends Microcosm {
  setup({ bridge }) {
    this.addEffect(Events, { bridge })
    this.addDomain('history', History)
  }
}

export default Repo
