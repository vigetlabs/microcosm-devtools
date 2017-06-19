import Microcosm from 'microcosm'
import History from './domains/history'
import Snapshot from './domains/snapshot'
import Focused from './domains/focused'
import Events from './effects/events'

class Repo extends Microcosm {
  static defaults = {
    batch: true
  }

  setup({ bridge }) {
    this.addDomain('history', History)
    this.addDomain('snapshot', Snapshot)
    this.addDomain('focused', Focused)

    this.addEffect(Events, { bridge })
  }
}

export default Repo
