# DevOps Project: MERN un client React un serveur Node.js
Il s'agit d'une application full-stack utilisant un client React et un serveur Node.js, avec MongoDB comme base de données. La conteneurisation est assurée par Docker, tandis que Docker Compose permet de gérer l'orchestration des services.

---

# Table des Matières
- Technologies Utilisées
- Variables d'Environnement
- Aperçu du Projet
- Configuration de Docker
- Images Docker
- Docker Compose
- Exécuter le Projet

---

# 1. Technologies Utilisées

 * Frontend : React
 * Backend : Node.js, Express
 * Base de Données : MongoDB
 * Conteneurisation : Docker, Docker Compose
 
 ---


# 2. Variables d'Environnement
 * REACT_APP_API_URL : Spécifie l'URL de base pour l'API, utilisée par le client React pour communiquer avec le serveur 
 * MONGO_URI : Définit l'URI de connexion à MongoDB, permettant au serveur de se connecter à la base de données

---

 # Aperçu du Projet


 Ce projet illustre l'intégration des pratiques DevOps pour un déploiement continu, automatisé et évolutif. Voici les étapes clés :

 * Conteneurisation des services avec Docker : Emballage du backend, du frontend et de la base de données PostgreSQL dans des conteneurs Docker.

 * Orchestration des services avec Docker Compose : Gestion de plusieurs conteneurs pour faciliter le développement local.

 * Automatisation du pipeline CI/CD avec Jenkins : Construction, scan de vulnérabilités et déploiement automatisés des images   
 Docker.

 * Déploiement évolutif avec Kubernetes et Helm : Orchestration des services dans un cluster Kubernetes avec une gestion simplifiée via Helm.
 
---
 
 # 3. Configuration de Docker

 * Client : Un environnement Node.js pour construire l'application React. Les dépendances sont installées et l'application est construite pour une utilisation en production. Un serveur HTTP simple peut être utilisé pour servir l'application construite.

 * Serveur : Un environnement Node.js qui installe les dépendances nécessaires et configure l'application pour écouter sur un port spécifique.

---

 # 4. Images Docker

 Les images Docker créées pour ce projet sont les suivantes :

 * Image du Client : mern-client
 * Image du Serveur : mern-server
 * Image de la Base de Données : mongo

---

 # 5. Docker Compose

  Docker Compose orchestre les différents services de l'application, comme le client, le serveur et MongoDB. Grâce à cette interconnexion, le client et le serveur peuvent échanger des données sans interruption. Le fichier de configuration définit les images à utiliser, les ports à exposer, ainsi que les variables d'environnement essentielles pour chaque service


---

  # 6. Exécuter le Projet


  Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.

    1. Clonez ce dépôt sur votre machine locale.

    2. Accédez au répertoire du projet dans votre terminal.

    3. Construisez et démarrez l'application en utilisant Docker Compose :

                docker-compose up --build

    4. Accédez au client à <http://localhost:3000/>


     # Kubernetes Deployment

        kubectl apply -f ./k8s/server-deployment.yaml
        kubectl apply -f ./k8s/client-deployment.yaml
        kubectl apply -f ./k8s/mongo-deployment.yaml

        Check Pod Status:

         kubectl get pods
   


---

    # Screens 

     *  Poussez les images Docker sur Docker Hub
     
  ![cp1](https://github.com/user-attachments/assets/6fa84699-8afe-4465-ad07-354c748644d2)

  ![cp2](https://github.com/user-attachments/assets/aabe50b4-327d-4d58-ba89-8a0dfefb995c)


    *  pipeline
 
  ![cp3](https://github.com/user-attachments/assets/7e000e70-0686-4f8c-b5db-0c404769b6a7)
  
    
      


    * Configurez Jenkins pour automatiser les étapes CI/CD 

    
    ![cptr5](https://github.com/user-attachments/assets/08538c5e-9299-4aee-9750-8ae1fab80285)


    # Création Charts Helm

    1. mkdir charts
    2. cd charts 

        * Création du Chart pour mongodb

           
            cmnd :  helm create mongodb
        
         * Création du Chart pour le server :

         cmnd : helm create server


         * Création du Chart pour le client :

      
         cmnd : helm create client
         

         
   ![cptr6](https://github.com/user-attachments/assets/0b44ff65-3f90-4205-9abb-6d1d3bfd2455)

        * Les Services Jenkinsfile 

 ![cptr8](https://github.com/user-attachments/assets/ad86914b-902e-4c49-a635-07715ce922bc)


        * docker file server 

   ![cpt10](https://github.com/user-attachments/assets/760f7e4a-e8d5-4bd4-8ecd-64b686489488)



        * docker file client
        

   ![cpt 20](https://github.com/user-attachments/assets/d3294cd9-d18d-45ba-ab50-8d4e678ed0ce)


        #  file ConfigMap

        
        
   ![cptr55](https://github.com/user-attachments/assets/1619beb8-d518-4a87-9e20-61108d567c8d)




       


     












 

 




 

 













