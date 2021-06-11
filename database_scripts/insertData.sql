INSERT INTO artiste (login, nom, prenom, password) VALUES
('admin','admin', 'admin', 'admin');

INSERT INTO theme (themeNom) VALUES 
('Chat'), 
('Chien'), 
('Graphisme');

INSERT INTO image (chemin, indice, artisteId, themeId, type_image) VALUES
('singuliers/chat amoureux.jpg', 'Saurez vous reconnaître un chat amoureux ?',1, 1, 1),
('singuliers/chat bien coiffé.jpg', 'Mon chat est une fausse blonde', 1, 1,1),
('singuliers/chat borgne.jpg', 'Ce chat là a fait une croix sur son oeil', 1, 1,1),
('singuliers/chat chapeauté.jpg', "C'est encore le chat qui porte le chapeau", 1, 1,1),
('singuliers/chat cosmonaute.jpg', 'Saurez-vous reconnaître le chat de Thomas Pesquet ?', 1, 1,1),
('singuliers/chat cyclope.jpg', "Il connaît robocop, et s'appelle cyclope", 1, 1,1),
('singuliers/chat licorne.jpg', 'Ne confondons pas une salicorne et un chat-licorne !', 1, 1,1),
('singuliers/chat malade.jpg', 'Ce chat là a oublié de se faire vacciner contre la grippe', 1, 1,1),
('singuliers/chat moustachu.jpg', 'Quel type de chat se cache derrière ses moustaches ?', 1, 1,1),
('singuliers/chat myope.jpg', 'Chaussez vos lunettes et montrez-moi le chat myope ?', 1, 1,1),
('singuliers/chat pirate.jpg', 'Après la fiancée du pirate, voici le chat du corsaire', 1, 1,1),
('singuliers/chat plongeur.jpg', 'Chat du grand bleu', 1, 1,1),
('singuliers/chat princesse.jpg', "C'est la reine d'Angleterre qui a perdu son chat", 1, 1,1),
('singuliers/chat titi parisien.jpg', 'Après les gilets jaunes, voici les foulards rouges',1, 1, 1),
('neutres/chat neutre 1.jpg','',1, 1 ,0),
('neutres/chat neutre 2.jpg','',1, 1 ,0),
('neutres/chat neutre 3.jpg','',1, 1 ,0),
('neutres/chat neutre 4.jpg','',1, 1 ,0),
('neutres/chat neutre 5.jpg','',1, 1 ,0),
('neutres/chat neutre 6.jpg','',1, 1 ,0),
('neutres/chat neutre 7.jpg','',1, 1 ,0),
('neutres/chat neutre 8.jpg','',1, 1 ,0),
('neutres/chat neutre 9.jpg','',1, 1 ,0),
('neutres/chat neutre 10.jpg','',1, 1,0),
('neutres/chat neutre 11.jpg','',1, 1,0),
('neutres/chat neutre 12.jpg','',1, 1,0),
('neutres/chat neutre 13.jpg','',1, 1,0);