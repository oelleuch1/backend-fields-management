export interface ILoggerRepository {
    logEvent(message: string, properties: Record<string, any>): void;
    logException(error: Error, properties: Record<string, any>): void;
}