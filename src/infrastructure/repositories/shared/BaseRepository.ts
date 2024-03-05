import type { ApiResponse, RequestParams } from '@domain/entities/Api'
import type { IBaseRepository } from '@domain/interfaces/shared/IBaseRepository'

export class BaseRepository<T> implements IBaseRepository<T> {
  async getAll(params?: RequestParams): Promise<ApiResponse<T>> {
    return { items: [], count: 100 }
  }

  async getById(id: string): Promise<T> {
    return Promise.resolve({} as T)
  }

  async create(data: Partial<T>): Promise<T> {
    return Promise.resolve({} as T)
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return Promise.resolve({} as T)
  }

  async delete(id: string): Promise<void> {}
}
