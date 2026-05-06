from sqlalchemy.orm import Session
from app.models.entry import Entry

class EntryRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        return self.db.query(Entry).all()

    def get_by_id(self, entry_id: int):
        return self.db.query(Entry).filter(Entry.id == entry_id).first()

    def create(self, title: str, content: str):
        entry = Entry(title=title, content=content)
        self.db.add(entry)
        self.db.commit()
        self.db.refresh(entry)
        return entry

    def delete(self, entry_id: int):
        entry = self.db.query(Entry).filter(Entry.id == entry_id).first()
        if entry:
            self.db.delete(entry)
            self.db.commit()
        return entry
