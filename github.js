class Github {
  constructor() {
    // this.client_id = "Here goes the Client ID number given by GitHub";
    // this.client_secret = "Here goes the Client Secret number given by GitHub";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    //complete fetch code including client ID and Secret given by GitHub to the user to unlimited number of access per day
    // const profileResponse = await fetch(
    //   `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    // );

    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
