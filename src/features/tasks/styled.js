// Otwórz src/features/tasks/styled.js i wklej PONIŻSZY KOD (cała zawartość), aby dodać Span!
import styled, { css } from "styled-components";

export const List = styled.ul`...`; // Twoja dotychczasowa definicja List
export const Item = styled.li`...`; // Twoja dotychczasowa definicja Item
export const Content = styled.span`...`; // Twoja dotychczasowa definicja Content
export const Button = styled.button`...`; // Twoja dotychczasowa definicja Button

// DODANY EKSPORT SPAN (Błąd 2)
export const Span = styled.span`
  display: flex;
  flex-direction: row;
`;