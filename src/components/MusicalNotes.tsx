import { Music } from 'lucide-react';

const MusicalNotes = () => {
  return (
    <div className="musical-notes">
      <Music className="note-1" size={24} />
      <Music className="note-2" size={20} />
      <Music className="note-3" size={28} />
      <Music className="note-4" size={22} />
      <Music className="note-5" size={26} />
    </div>
  );
};

export default MusicalNotes;
