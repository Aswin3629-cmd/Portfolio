# Aswin MP — DevOps Portfolio

A dark, glass-UI portfolio site built as a real deployment pipeline, not just a
static resume page.

## Run it locally

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173

## Build & run in Docker

```bash
docker compose up --build
```

Open http://localhost:8080

## Project structure

```
portfolio/
├── src/
│   ├── components/       # Navbar, Hero, About, Education, Experience, Projects, Contact, Footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile            # multi-stage build -> nginx
├── nginx.conf
├── docker-compose.yml
├── .github/workflows/deploy.yml   # CI: build -> push to Docker Hub
├── terraform/            # reserved for AWS provisioning
├── kubernetes/           # reserved for K8s manifests
└── backend/              # reserved for API layer
```

## Deployment architecture (target state)

```
User → Nginx (reverse proxy) → Frontend (React, this repo)
                              → Backend API (future)
                              → Database (future)

GitHub → GitHub Actions CI/CD → Docker Build → Docker Hub
       → Kubernetes → AWS → Prometheus + Grafana monitoring
```

The frontend is deployable today as a standalone container. Backend, K8s
manifests, and Terraform are scaffolded as empty folders so the project can
grow into the full architecture without restructuring later.

## Before deploying

- Replace the placeholder email in `src/components/Contact.jsx`
- Add a real resume PDF at `public/Aswin_MP_Resume.pdf`
- Set `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` as GitHub repo secrets for the
  Actions workflow to push images
