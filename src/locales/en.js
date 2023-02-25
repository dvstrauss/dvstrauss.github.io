export default {
  components: {
    navigationDrawer: {
      aboutPageTitle: "About",
      settingsPageTitle: "Settings",
      themeTooltip: "Toggle dark mode",
    },
    themeLightDark: {
      tooltip: "Toggle dark mode",
    },
    themeMenu: {
      tooltip: "Pick a color theme",
    },
  },
  pages: {
    aboutPage: {
      text: "Welcome to my experiments.",
      title: "Playground",
    },
    loginPage: {
      button: "Login",
      defaultError: "Something went wrong",
      password: "Password",
      title: "Playground",
      username: "Username",
    },
    notFound: {
      aboutPageLink: "safety",
      text: "Take me back to {0}",
      title: "404",
    },
    settingsPage: {
      themeLabel: "Change color theme",
      title: "Settings",
    },
  },
}
