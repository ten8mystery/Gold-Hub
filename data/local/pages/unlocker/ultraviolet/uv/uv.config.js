self.__uv$config = {
    prefix: '/s/',
    bare: 'https://bare.benroxy.com/bare/', // Backup Bare server
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/data/local/pages/unlocker/ultraviolet/uv.handler.js',
    bundle: '/data/local/pages/unlocker/ultraviolet/uv.bundle.js',
    config: '/data/local/pages/unlocker/ultraviolet/uv.config.js',
    sw: '/uv-sw.js',
    // THIS IS THE WISP PART:
    wisp: 'wss://wisp.mercurywork.shop/', 
};
