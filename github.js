class Github {
  constructor() {
    this.client_id = "051a57a7986cac3a8693";
    this.client_secret = "cfdc6c530142bcb9d54b110175e760ce3e6c96d9";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return { profileData };
  }
}
