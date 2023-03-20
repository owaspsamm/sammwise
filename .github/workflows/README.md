# Build and Push Docker Image Github Action

This Github Action builds a Docker image from a Dockerfile and pushes it to both Docker Hub and GitHub Container Registry.

## Usage

1. Create a `.github/workflows/docker.yml` file in your Github repository.
1. Copy the contents of this action into the `docker.yml` file.
1. Create secrets for your Docker Hub username and token, and your GitHub token. Add these secrets to your repository's secrets.
 
```yaml
secrets:
  DOCKERHUB_USERNAME: <your_username>
  DOCKERHUB_TOKEN: <your_token>
  GH_TOKEN: <your_token>
```
4. Modify the tags field in the Build and push step to reflect your desired Docker image name and version.
```yaml
- name: Build and push
  uses: docker/build-push-action@v4
  with:
    context: .
    file: ./docker/Dockerfile
    push: true
    tags: |
      ${{ secrets.DOCKERHUB_USERNAME }}/sammwise:latest
      ghcr.io/${{ github.repository_owner }}/sammwise:latest
```
## Workflow
1. The workflow is triggered when code is pushed to the main branch, or when it is manually triggered from the Actions tab.
1. The build job is started on an ubuntu-latest runner.
1. The Docker image is built from the Dockerfile located in the ./docker directory.
1. The image is tagged with the specified tags.
1. The Docker image is pushed to Docker Hub and GitHub Container Registry.

## Acknowledgements
This Github Action was adapted from the [Build and Push Docker Image action by Docker](https://github.com/marketplace/actions/build-and-push-docker-images).



