export enum IpcChannels {
    search = "search",
    searchResponse = "search-response",
    execute = "execute",
    autoComplete = "autocomplete",
    openSearchResultLocation = "open-search-result-location",
    mainWindowHasBeenHidden = "main-window-has-been-hidden",
    mainWindowHasBeenShown = "main-window-has-been-shown",
    userInputUpdated = "user-input-updated",
    reloadApp = "reload-app",
    openSettingsWindow = "open-settings-window",
    configUpdated = "config-updated",
    indexRefreshSucceeded = "index-refresh-succeeded",
    indexRefreshFailed = "index-refresh-failed",
    appearanceOptionsUpdated = "user-styles-updated",
    colorThemeOptionsUpdated = "color-theme-updated",
    ueliCommandExecuted = "ueli-command-executed",
    folderPathRequested = "folder-path-requested",
    folderPathResult = "folder-path-result",
    folderAndFilePathsRequested = "folder-and-file-paths-requested",
    folderAndFilePathsResult = "folder-and-file-paths-result",
    filePathRequested = "file-path-requested",
    filePathResult = "file-path-result",
    favoritesRequested = "favorites-requested",
    favoritesReponse = "favorites-response",
}
