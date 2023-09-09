----------------------CONSEGNA--------------------------
All'interno di un casolare non si può uscire ne di giorno ne di sera
C'è un casolare vicino da cui arrivano delle luci

Devo trovare un modo per comunciare con un altro casolare:
Viene suggerito il modo, dalla regia, di utilizzare il codice morse con degli impulsi visivi che possiamo produrre con il monitor di un pc.

Produrre quindi impulsi visivi che partono dal nostro monitor sperando che l'altro casolare legga, a distanza, il nostro codice.

Deve essere possibile, tramite input da tastiera, far fleshare lo schermo tramite tap, o click.

Il programma deve essere inoltre in grado di tradurre messaggi testuali in codice morse.Questi messaggi possono essere presi da un file di testo salvato su un data base o scritti su un input, frase in linguaggio naturale,traduzione in codice morse

Per generare questo programma bisogna utilizzare front end come html,css, js, React, Java e MySql. 


Bisogna poi solo immaginare che nel caso in cui l'altro casolare risponda e noi non siamo presenti, come possiamo fare per capire/registrare cosa ci hanno comunicato?





----------------------DATABASE COMMAND--------------------------
CREATE DATABASE IF NOT EXISTS morse_code_database;

USE morse_code_database;

CREATE TABLE IF NOT EXISTS message (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL
);



----------------------PUNTO 3--------------------------
Il punto 3 dell'esercizio lascia largo spazio di interpretazione. Per una corretta comunicazione in codice morse infatti, linguaggio non verbale e puramente "visivo", è necessaria e fondamentale la presenza di un interlocutore in grado di vedere (e ovviamente decifrare) tali segnali. 
In mancanza di un interlocutore umano dunque, l'uso di un software che si sostituisca in todo all'occhio umano è da interndersi obbligatorio.
Da qui lo spunto di implemetare nel nostro applicativo la funzione di "ControlRemote", in grado di attivare una camera ad infrarossi collegata ad un pc.
Volendosi immergere dunque nel mondo ingegneristico, bisognerebbe sviluppare un programma capace di rilevare l'intensità e la durata di tale illuminazione. Con questi due parametri in ingresso dunque saremmo in grado di discriminare i vari segnali ed invertire il processo di traduzione da luce in lettere.
Serve comunque precisare come un programma di questo tipo non può essere in grado, da solo, a creare del testo facilmente leggibile poi dall'uomo. Esso infatti creerebbe un'unica stringa testuale senza gli opportuni spazi per distanziare le lettere l'una dall'altra. Per risolvere tale problema e salvare su un database un messaggio già decifrato, potrebbe essere sufficiente integrare nel programma un'intelligenza artificiale in grado di leggere tale stringa e dare una prima interpretazione alle parole.












