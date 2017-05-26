export default function humanize(type) {
  let [title, id] = type.split('.', 2)

  // Remove "$" in front of system Microcosm actions
  title = title.replace(/^\$/, '')

  return title
}
