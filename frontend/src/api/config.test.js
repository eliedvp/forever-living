import API_BASE_URL, { getAuthHeaders, getFormDataHeaders, getToken } from './config';

describe('configuration de l\'API', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('utilise l\'URL locale par défaut', () => {
    expect(API_BASE_URL).toBe('http://localhost:5001/api');
  });

  test('getToken lit le token dans le localStorage', () => {
    expect(getToken()).toBeNull();
    localStorage.setItem('token', 'abc');
    expect(getToken()).toBe('abc');
  });

  test('getAuthHeaders n\'ajoute pas Authorization sans token', () => {
    expect(getAuthHeaders()).toEqual({ 'Content-Type': 'application/json' });
  });

  test('getAuthHeaders ajoute le Bearer token lorsqu\'il existe', () => {
    localStorage.setItem('token', 'abc');
    expect(getAuthHeaders()).toEqual({
      'Content-Type': 'application/json',
      Authorization: 'Bearer abc',
    });
  });

  test('getFormDataHeaders ne fixe pas Content-Type (géré par le navigateur)', () => {
    localStorage.setItem('token', 'abc');
    expect(getFormDataHeaders()).toEqual({ Authorization: 'Bearer abc' });
  });
});
