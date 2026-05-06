from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.entry import Entry, EntryCreate
from app.repositories.entry import EntryRepository

router = APIRouter(prefix="/entries", tags=["entries"])

@router.get("")
def list_entries(db: Session = Depends(get_db)):
    repo = EntryRepository(db)
    return repo.get_all()

@router.post("")
def create_entry(entry: EntryCreate, db: Session = Depends(get_db)):
    repo = EntryRepository(db)
    return repo.create(entry.title, entry.content)

@router.get("/{entry_id}")
def get_entry(entry_id: int, db: Session = Depends(get_db)):
    repo = EntryRepository(db)
    return repo.get_by_id(entry_id)

@router.delete("/{entry_id}")
def delete_entry(entry_id: int, db: Session = Depends(get_db)):
    repo = EntryRepository(db)
    return repo.delete(entry_id)
