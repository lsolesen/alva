module.exports = file => {
  return (file.meta.rating > 3) ? ['Udvalgte'] : []
}
