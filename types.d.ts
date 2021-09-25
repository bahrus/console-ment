export interface ConsoleMentProps{
    log: any,
    warn: any,
    error: any
}

export interface ConsoleMentActions{
    onLog(self: this): void;
    onWarn(self: this): void;
    onError(self: this): void;
}