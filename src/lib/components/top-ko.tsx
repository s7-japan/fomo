import {} from 'react';
import { EventEmitType } from "../services/layout.service";

export interface IAppProps {
    is_show_header_footer: boolean
    event_emit: (type: EventEmitType) => void
}

export default function App (props: IAppProps) {
  return (
    <>
      koko
    </>
  );
}
