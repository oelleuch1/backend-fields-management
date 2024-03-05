import { ILoggerRepository } from '../../../domain/interfaces/shared/ILoggerRepository';

export class LoggerRepository implements ILoggerRepository {
    logEvent(message: string, properties: Record<string, any>): void {
        console.log({ level: 'Debug', message, properties })
    }

    logException(error: Error, properties: Record<string, any>): void {
        console.error({ level: 'Error', error, properties })
    }
}