import axios from 'axios';
import MissingHeadersError from '../../errors/MissingHeadersError';

export default class HttpHelper {
  private readonly headers?: Record<string, string>;

  constructor(private token?: string) {
    if (this.token) {
      this.headers = { Authorization: `Bearer ${this.token}` };
    }
  }

  public async get<T>(
    url: string,
    headers?,
    params?: Record<string, unknown>,
  ): Promise<T> {
    const result = await axios.get(url, {
      headers: { ...headers, ...this.headers },
      params,
    });

    return result.data;
  }

  public async post<T>(url: string, body: unknown, headers): Promise<T> {
    const result = await axios.post(url, body, {
      headers: { ...headers, ...this.headers },
    });
    return result.data;
  }

  public async put<T>(url: string, body: unknown, headers): Promise<T> {
    const result = await axios.put(url, body, {
      headers: { ...headers, ...this.headers },
    });
    return result.data;
  }

  public async delete<T>(
    url: string,
    userId: string,
    projectId?: string,
    connectionId?: string,
    useHeaders = true,
  ): Promise<T> {
    if (useHeaders && !this.headers) {
      throw new MissingHeadersError('Headers are required for this call.');
    }

    const result = await axios.delete(url, {
      headers: this.headers,
      data: { userId, projectId, connectionId },
    });
    return result.data;
  }
}
