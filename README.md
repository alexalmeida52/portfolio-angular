# Portfolio Angular

Este repositório contém o **frontend** do meu portfólio profissional, desenvolvido utilizando **Angular**. O objetivo é criar uma **Single Page Application (SPA)** que exibe informações sobre minha carreira e projetos. A aplicação pode ser executada localmente ou em produção utilizando Docker e Kubernetes.

## Funcionalidades

- A aplicação é construída com **Angular** e pode ser executada localmente com o comando `ng serve`.
- Para ambientes de produção, a aplicação pode ser empacotada em uma imagem Docker. A imagem é servida por um servidor **Nginx** na porta **80**.
- **CI/CD** configurado com **GitHub Actions**: A pipeline de integração e entrega contínua gera a imagem Docker e a envia para o **DockerHub**. Após isso, a pipeline também realiza o **deploy** da aplicação atualizando o **Kustomization** em um cluster Kubernetes.

Obs.: Se você não está interessado  em saber como subir a aplicação em um ambiente k8s pode parar por aqui e seguir rodando o código com o `ng serve`, lembre-se de instalar as dependências com `npm install`

## Usando containers

### CI/CD com GitHub Actions

Este projeto utiliza o **GitHub Actions** para automatizar o processo de **build** e **deploy**. As configurações da pipeline podem ser encontradas em:


A pipeline realiza as seguintes etapas:

1. **Build da aplicação**: Cria a imagem Docker da aplicação.
2. **Envio da imagem para DockerHub**: A imagem é enviada para o DockerHub.
3. **Atualização do Kubernetes**: O **Kustomize** é utilizado para atualizar o arquivo kustomization.yaml e refletir as últimas mudanças, automaticamente implantando a aplicação no cluster Kubernetes.

### Kubernetes & ArgoCD

O **cluster Kubernetes** para este projeto está sendo executado localmente usando o **MicroK8s**. O **ArgoCD** é utilizado para a automação do **deploy** da aplicação.

Para a integração com o Kubernetes e o deploy, siga os passos abaixo:

1. **Instalar Docker**: É necessário ter o Docker instalado para criar e rodar imagens Docker.
2. **Executar o MicroK8s**: Instale e inicie o **MicroK8s** para ter um cluster Kubernetes local.
3. **ArgoCD para CI/CD**: O **ArgoCD** detecta mudanças no `kustomization.yaml` e automaticamente realiza o deploy da aplicação, criando ou atualizando pods no Kubernetes.
4. **Configuração do ArgoCD**:
    - Instale o **ArgoCD** seguindo sua [documentação oficial](https://argo-cd.readthedocs.io/en/stable/).
    - Acesse a interface do ArgoCD via `port-forward` e crie um novo projeto para vincular seu repositório Git.
    - Na interface gráfica do ArgoCD, você poderá monitorar a saúde dos pods e o status do deploy.

### Comandos importantes

- **Executar a aplicação localmente**:  
  Para rodar a aplicação Angular localmente em um servidor de desenvolvimento sem usar o docker, use o seguinte comando:
  ```bash
  ng serve
  ```
  A aplicação estará disponível em http://localhost:4200.

- Criar e rodar a imagem Docker: Para construir e rodar a imagem Docker da aplicação:
    ``` bash 
    docker build -t nome-da-imagem .
    docker run -p 80:80 nome-da-imagem
    ```

- Acessar o ArgoCD: Para acessar o ArgoCD localmente (via port-forward):
    ```
    kubectl port-forward svc/argocd-server -n argocd 8080:80
    ```
    Após isso, acesse http://localhost:8080 para a interface gráfica do ArgoCD.

Requisitos
- Docker: Para construção e execução da imagem Docker.
- MicroK8s: Para executar o Kubernetes localmente.
- kubectl: Para interagir com o cluster Kubernetes.
- ArgoCD: Para automação do deploy no Kubernetes.