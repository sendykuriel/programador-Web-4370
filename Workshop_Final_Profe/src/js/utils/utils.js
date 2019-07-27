function getId(person) {
  return parseInt(person.url.split('/')[5])
}

export { getId }