self.__uv$config = {
    prefix: '/s/',
    bare: 'https://bare.benroxy.com/bare/', 
    wisp: 'wss://glseries.net/wisp/', 
    encodeUrl: Ultraviolet.codec.xor.encode, 
    decodeUrl: Ultraviolet.codec.xor.decode,
    transport: '/data/local/pages/unlocker/ultraviolet/uv/uv.bundle.js',
    handler: '/data/local/pages/unlocker/ultraviolet/uv/uv.handler.js',
    bundle: '/data/local/pages/unlocker/ultraviolet/uv/uv.bundle.js',
    config: '/data/local/pages/unlocker/ultraviolet/uv/uv.config.js',
    sw: '/uv-sw.js',
};
