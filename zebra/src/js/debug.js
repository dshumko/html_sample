function LOG(text) {
    //console.log(text);

    if (window.debug) {
        window.debug(" ZEBRA DEBUG : "
                + "\033[0m| "
                + text);
    }
}
