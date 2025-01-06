import { create } from 'zustand';
import { SuggestionItem } from '../types/type';

interface SharedState {
  suggestions: SuggestionItem[];
  response: string;
  conversation: Message[];
}
