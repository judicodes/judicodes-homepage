<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="bg-light-teal-lighten-3 text-grey-darken-4">
        <v-row justify="center">
          <v-col cols="10" md="8" lg="6">
            <v-card-text class="card-text text-grey-darken-4">
              <p class="text-center font-italic">Hi, I'm Judith.</p>
              <p>
                I'm a <span class="emphasize">self-employed software engineer</span> based in
                Berlin, and I like to build things on the internet.
              </p>
              <p>
                I have 5+ years of experience with
                <span class="emphasize">full-stack development</span> using technologies such as
                <span class="emphasize">React</span> or <span class="emphasize">Vue.js</span> on the
                frontend and <span class="emphasize">Node.js</span> or
                <span class="emphasize">Golang</span> on the backend. On the infrastructure side, I
                have experience with <span class="emphasize">Docker</span> and
                <span class="emphasize">Kubernetes</span>, cloud providers such as
                <span class="emphasize">AWS</span> or <span class="emphasize">Azure</span>, and
                build pipelines such as <span class="emphasize">CircleCI</span>,
                <span class="emphasize">Jenkins</span>, or
                <span class="emphasize">GitHub Actions</span>.
              </p>
              <p>
                While I enjoy discovering and learning new technologies, I am also passionate about
                <span class="emphasize">Developer Experience</span> and
                <span class="emphasize">Developer Productivity</span> since I believe how we
                organize our work is just as important (if not more) than choosing the right tech
                stack.
              </p>
              <p>
                After a few years of full-time employment, I have realized that a) working in tech
                is awesome and b) it can be very exhausting sometimes. Therefore, I embarked on a
                <span class="emphasize">self-employment adventure</span>, hoping to find a
                <span class="emphasize">calm</span> and sustainable approach to working in tech.
              </p>
              <p>
                I can support your team as a
                <span class="emphasize">freelance software engineer</span> and
                <span class="emphasize">consultant</span>, primarily within the
                JavaScript/TypeScript ecosystem but I am always open to working with new
                technologies.
              </p>
              <p>
                I prefer progress over perfection and enjoy building prototypes, releasing MVPs, and
                shipping things fast.
              </p>
              <p>
                If you want to <span class="emphasize">work with me</span>, contact me at
                hello@judithboehlert.com.
              </p>
            </v-card-text>
          </v-col></v-row
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.card-text,
.emphasize {
  font-size: 24px;
  font-weight: 300;
  line-height: 1.75rem;
  text-align: justify;
}

.emphasize {
  font-weight: 400;
}

p {
  padding: 10px 0;
}
</style>
