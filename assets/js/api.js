
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/natatgh/js-developer-portfolio-main/main/data/profile.json?token=GHSAT0AAAAAACFV36TVSHHK5JVBPUXZJ6NOZGZFETA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
