export interface Agenda {
  upcoming: Event[];
  past: Event[];
}

export interface Event {
  title: string;
  date: string;
}
