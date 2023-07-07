<template>
  <div>
    <v-btn variant="plain" @click="openDialog"> Legal Notice & Privacy Policy </v-btn>
    <client-only>
      <v-dialog v-model="isDialogOpen" :width="dialogWidth">
        <v-card>
          <v-card-title>Legal Notice & Privacy Policy</v-card-title>
          <v-card-text>
            <v-expansion-panels variant="popout" class="my-4">
              <v-expansion-panel title="Legal Notice (German Law)">
                <v-expansion-panel-text>
                  <p>According to § 5 TMG</p>
                  <p class="font-weight-bold">Contact:</p>
                  <p class="mb-4">
                    Judith Böhlert <br />
                    Nazarethkirchstr. 43 <br />
                    13347 Berlin <br />
                    Germany <br />
                    Phone: +49 (0)176 84879910 <br />
                    Email: judith.boehlert@mailbox.org
                    <br />
                    Germany
                  </p>
                  <p class="font-weight-bold">
                    Responsible for the contents according to § 55 Abs. 2 RStV:
                  </p>
                  <p class="mb-4">
                    Judith Böhlert <br />
                    Nazarethkirchstr.43 <br />
                    13347 Berlin <br />
                    Germany
                  </p>
                  <p class="text-caption">
                    Generated with Impressum Generator der Kanzlei Hasselbach, Rechtsanwälte für
                    Arbeitsrecht und Familienrecht
                  </p>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel title="Privacy Policy">
                <v-expansion-panel-text>
                  <p>
                    At judicodes, accessible from judicodes.com, one of our main priorities is the
                    privacy of our visitors. This Privacy Policy document contains types of
                    information that is collected and recorded by judicodes and how we use it.
                  </p>
                  <p>
                    If you have additional questions or require more information about our Privacy
                    Policy, do not hesitate to contact us. Our Privacy Policy was generated with the
                    help of
                    <a href="https://www.gdprprivacynotice.com/" target="_blank" rel="noreferrer">
                      GDPR Privacy Policy Generator from GDPRPrivacyNotice.com
                    </a>
                  </p>
                  <p class="font-weight-bold mt-4">General Data Protection Regulation (GDPR)</p>
                  <p>We are a Data Controller of your information.</p>
                  <p>
                    judicodes legal basis for collecting and using the personal information
                    described in this Privacy Policy depends on the Personal Information we collect
                    and the specific context in which we collect the information:
                  </p>
                  <ul>
                    <li>judicodes needs to perform a contract with you</li>
                    <li>You have given judicodes permission to do so</li>
                    <li>
                      Processing your personal information is in judicodes legitimate interests
                    </li>
                    <li>judicodes needs to comply with the law</li>
                  </ul>
                  <p>
                    judicodes will retain your personal information only for as long as is necessary
                    for the purposes set out in this Privacy Policy. We will retain and use your
                    information to the extent necessary to comply with our legal obligations,
                    resolve disputes, and enforce our policies.
                  </p>
                  <p>
                    If you are a resident of the European Economic Area (EEA), you have certain data
                    protection rights. If you wish to be informed what Personal Information we hold
                    about you and if you want it to be removed from our systems, please contact us.
                  </p>
                  <p>In certain circumstances, you have the following data protection rights:</p>
                  <ul>
                    <li>
                      The right to access, update or to delete the information we have on you.
                    </li>
                    <li>The right of rectification.</li>
                    <li>The right to object.</li>
                    <li>The right of restriction.</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p class="font-weight-bold mt-4">Log Files</p>
                  <p>
                    judicodes is hosted on
                    <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
                      Netlify
                    </a>
                    which follows a standard procedure of using log files. These files log visitors
                    when they visit websites. All hosting companies do this and a part of hosting
                    services&apos; analytics. The information collected by log files include
                    internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
                    date and time stamp, referring/exit pages, and possibly the number of clicks.
                    These are not linked to any information that is personally identifiable. The
                    purpose of the information is for analyzing trends, administering the site,
                    tracking users&apos; movement on the website, and gathering demographic
                    information. The information will be stored for less than 30 days.
                  </p>

                  <p class="font-weight-bold mt-4">Third Party Privacy Policies</p>

                  <p>
                    judicodes&apos;s Privacy Policy does not apply to other advertisers or websites.
                    Thus, we are advising you to consult the respective Privacy Policies of these
                    third-party ad servers for more detailed information. It may include their
                    practices and instructions about how to opt-out of certain options.
                  </p>

                  <p>
                    You can choose to disable cookies through your individual browser options. To
                    know more detailed information about cookie management with specific web
                    browsers, it can be found at the browsers&apos; respective websites.
                  </p>

                  <p class="font-italic mt-4">Online Privacy Policy Only</p>

                  <p>
                    Our Privacy Policy applies only to our online activities and is valid for
                    visitors to our website with regards to the information that they shared and/or
                    collect in judicodes. This policy is not applicable to any information collected
                    offline or via channels other than this website.
                  </p>

                  <p class="font-italic mt-4">Consent</p>

                  <p>
                    By using our website, you hereby consent to our Privacy Policy and agree to its
                    terms.
                  </p>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel title="Terms of Service">
                <v-expansion-panel-text
                  ><p class="font-weight-bold mt-4">1. Terms</p>

                  <p>
                    By accessing this Website, accessible from judicodes.com, you are agreeing to be
                    bound by these Website Terms and Conditions of Use and agree that you are
                    responsible for the agreement with any applicable local laws. If you disagree
                    with any of these terms, you are prohibited from accessing this site. The
                    materials contained in this Website are protected by copyright and trade mark
                    law.
                  </p>

                  <p class="font-weight-bold mt-4">2. Use License</p>

                  <p>
                    Permission is granted to temporarily download one copy of the materials on
                    judicodes&apos;s Website for personal, non-commercial transitory viewing only.
                    This is the grant of a license, not a transfer of title, and under this license
                    you may not:
                  </p>

                  <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose or for any public display;</li>
                    <li>
                      attempt to reverse engineer any software contained on judicodes&apos;s
                      Website;
                    </li>
                    <li>
                      remove any copyright or other proprietary notations from the materials; or
                    </li>
                    <li>
                      transferring the materials to another person or &quot;mirror&quot; the
                      materials on any other server.
                    </li>
                  </ul>

                  <p>
                    This will let judicodes to terminate upon violations of any of these
                    restrictions. Upon termination, your viewing right will also be terminated and
                    you should destroy any downloaded materials in your possession whether it is
                    printed or electronic format.
                  </p>
                  <p class="text-caption mt-4">
                    These Terms of Service has been created with the help of the
                    <a
                      href="https://www.termsofservicegenerator.net"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Terms Of Service Generator
                    </a>
                    .
                  </p></v-expansion-panel-text
                >
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue-grey" block @click="closeDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

const isDialogOpen = ref(false);

const openDialog = () => (isDialogOpen.value = true);
const closeDialog = () => (isDialogOpen.value = false);

const { name } = useDisplay();
const dialogWidth = computed(() => {
  switch (name.value) {
    case 'xs':
      return '90%';
    case 'sm':
      return '80%';
    case 'md':
      return '70%';
    case 'lg':
      return '60%';
    case 'xl':
      return '50%';
    case 'xxl':
      return '40%';
    default:
      return '40%';
  }
});
</script>

<style scoped lang="scss">
ul {
  list-style: inside;
}
</style>
