function getLocalImages() {
  const images = import.meta.glob('../assets/images/Carrossel/*.(png|jpg|jpeg|svg)', { eager: true });
  return Object.entries(images).map(([path, module]) => ({
    url: module.default,
    alt: path.split('/').pop().split('.')[0]
  }));
}

export default getLocalImages;