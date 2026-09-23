# DB SCHEMA 

Il tema sarà un'aapp di libri in cui si potranno lasciare recensioni pubbliche

## Tables

- books
- reviews

relations -> uno a molti

## Table: Books
- id INT AI PK
- title
- author
- cover-image
- abstract
- created_at DATETIME DEFAULT (NOW())
- updates_at DATETIME DEFAULT (NOW())

## Table: Review
- Id 
- book_id FK
- name - varchar(50)
- review
- vote Tinyint 
- created_at DATETIME DEFAULT (NOW())
- updated_at DATETIME DEFAULT (NOW())

## data

```sql
INSERT INTO `web_app_books`.`books` (`title`, `author`, `cover_image`, `abstract`) VALUES
('Il nome della rosa', 'Umberto Eco', 'https://placehold.co/600x400?text=Il+nome+della+rosa', 'In un monastero italiano del Trecento, il frate Guglielmo da Baskerville indaga su una serie di morti misteriose tra manoscritti, eresie e segreti mai rivelati.'),
('1984', 'George Orwell', 'https://placehold.co/600x400?text=1984', 'In una societa controllata dal Grande Fratello, Winston Smith mette in discussione il potere, la propaganda e la possibilita di conservare un pensiero libero.'),
('Orgoglio e pregiudizio', 'Jane Austen', 'https://placehold.co/600x400?text=Orgoglio+e+pregiudizio', 'Elizabeth Bennet e Fitzwilliam Darcy devono superare prime impressioni, differenze sociali e orgoglio personale prima di capire cio che provano davvero.'),
('Il piccolo principe', 'Antoine de Saint-Exupery', 'https://placehold.co/600x400?text=Il+piccolo+principe', 'Un aviatore incontra nel deserto un giovane viaggiatore arrivato da un piccolo asteroide, che gli insegna a guardare il mondo con curiosita e responsabilita.'),
('Il signore degli anelli', 'J.R.R. Tolkien', 'https://placehold.co/600x400?text=Il+signore+degli+anelli', 'Frodo Baggins parte dalla Contea per distruggere l''Anello del Potere, attraversando una Terra di Mezzo minacciata dal ritorno di Sauron.'),
('L''ombra del vento', 'Carlos Ruiz Zafon', 'https://placehold.co/600x400?text=L''ombra+del+vento', 'Nella Barcellona del dopoguerra, Daniel Sempere cerca di ricostruire la vita di uno scrittore dimenticato e si trova coinvolto in una storia piena di misteri.'),
('La strada', 'Cormac McCarthy', 'https://placehold.co/600x400?text=La+strada', 'Un padre e suo figlio attraversano un mondo devastato, affidandosi alla memoria, alla speranza e alla scelta quotidiana di restare umani.');

INSERT INTO `web_app_books`.`reviews` (`book_id`, `name`, `review`, `vote`) VALUES
(1, 'Chiara Bianchi', 'Un giallo storico ricco di atmosfera. I dialoghi e la biblioteca del monastero rendono ogni pagina memorabile.', 5),
(1, 'Marco Rinaldi', 'La parte investigativa e quella filosofica si intrecciano bene, anche se alcuni passaggi richiedono molta attenzione.', 4),
(2, 'Elena Conti', 'Una lettura inquietante e ancora attuale. La descrizione del controllo sulla vita privata lascia il segno.', 5),
(2, 'Luca Ferri', 'Il ritmo diventa sempre piu intenso e il finale e difficile da dimenticare.', 5),
(3, 'Sara Moretti', 'Una storia d''amore brillante, con personaggi imperfetti e dialoghi ancora molto divertenti.', 5),
(3, 'Davide Greco', 'Ho apprezzato il modo in cui Austen critica le convenzioni sociali senza perdere leggerezza.', 4),
(4, 'Francesca Romano', 'Semplice solo in apparenza: ogni incontro del principe nasconde una riflessione sulla vita adulta.', 5),
(4, 'Andrea Villa', 'Un libro breve che cambia significato ogni volta che lo si rilegge.', 5),
(5, 'Matteo De Luca', 'Un viaggio epico con un mondo costruito in modo straordinario e personaggi impossibili da dimenticare.', 5),
(5, 'Giulia Costa', 'La storia e ampia e coinvolgente, anche se alcune descrizioni rallentano il ritmo.', 4),
(6, 'Alessia Fontana', 'L''atmosfera di Barcellona e il mistero del libro dimenticato mi hanno catturata fino all''ultima pagina.', 5),
(6, 'Nicolò Marchetti', 'Una storia piena di libri, segreti e personaggi complessi. Molto coinvolgente.', 4),
(7, 'Paolo Serra', 'Una lettura dura ma profondamente umana, costruita sul rapporto tra padre e figlio.', 5),
(7, 'Valentina Neri', 'Lo stile e minimale e potente. Non e una storia facile, ma resta a lungo nella memoria.', 5);
```
