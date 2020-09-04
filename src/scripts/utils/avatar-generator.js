class AvatarGenerator {
  static generate() {
    const random = Math.floor(Math.random() * 3) + 1;
    return `./images/avatars/${random}.webp`;
  }

  static generateDefault() {
    return './images/avatars/not-found.webp';
  }
}

export default AvatarGenerator;
