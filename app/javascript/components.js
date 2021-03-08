function importAll(r) {
  r.keys().forEach(r);
}

// Custom styles
importAll(require.context("../components/", true, /\.(css|scss|sass)$/));

// Stimulus controller
importAll(require.context("../components/", true, /[_\/]controller\.js$/));
