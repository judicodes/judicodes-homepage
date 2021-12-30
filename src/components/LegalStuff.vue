<template>
  <Dialog :open="isOpen" @close="closeModal">
    <DialogOverlay class="fixed inset-0 bg-black opacity-50" />

    <div
      class="
        fixed
        mx-auto
        mt-24
        inset-0
        z-10
        w-5/6
        md:w-1/2
        xl:w-1/3
        h-2/3
        shadow-xl
        rounded-xl
        overflow-y-auto
        dark:text-offwhite
        bg-lighttheme-light
        dark:bg-darktheme-light
      "
    >
      <div class="mx-6 my-10">
        <Disclosure as="div" class="mb-8">
          <DisclosureButton class="styled-disclosure-button">
            <span>Legal Notice (German Law)</span>
            <i class="fas fa-chevron-down fa-lg"></i>
          </DisclosureButton>
          <DisclosurePanel class="styled-disclosure-panel">
            <p>According to § 5 TMG</p>
            <p class="font-bold text-lg mt-4">Contact:</p>
            <p>
              Judith Böhlert <br />
              Nazarethkirchstr. 43 <br />
              13347 Berlin <br />
              Germany <br />
              Phone: +49 (0)176 84879910 <br />
              Email: judith.boehlert@mailbox.org<br />
              Germany
            </p>
            <p class="font-bold text-lg mt-4">Responsible for the contents according to § 55 Abs. 2 RStV:</p>
            <p>
              Judith Böhlert <br />
              Nazarethkirchstr.43 <br />
              13347 Berlin <br />
              Germany
            </p>
            <p class="text-sm mt-2">
              Generated with Impressum Generator der Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und
              Familienrecht
            </p>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" class="mb-8">
          <DisclosureButton class="styled-disclosure-button">
            <span>Privacy Policy</span>
            <i class="fas fa-chevron-down fa-lg"></i>
          </DisclosureButton>
          <DisclosurePanel class="styled-disclosure-panel">
            <p>
              At judicodes, accessible from judicodes.com, one of our main priorities is the privacy of our visitors.
              This Privacy Policy document contains types of information that is collected and recorded by judicodes and
              how we use it.
            </p>

            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to
              contact us. Our Privacy Policy was generated with the help of
              <a href="https://www.gdprprivacynotice.com/" target="_blank"
                >GDPR Privacy Policy Generator from GDPRPrivacyNotice.com</a
              >
            </p>

            <p class="font-bold text-lg mt-4">General Data Protection Regulation (GDPR)</p>
            <p>We are a Data Controller of your information.</p>

            <p>
              judicodes legal basis for collecting and using the personal information described in this Privacy Policy
              depends on the Personal Information we collect and the specific context in which we collect the
              information:
            </p>
            <ul>
              <li>judicodes needs to perform a contract with you</li>
              <li>You have given judicodes permission to do so</li>
              <li>Processing your personal information is in judicodes legitimate interests</li>
              <li>judicodes needs to comply with the law</li>
            </ul>

            <p>
              judicodes will retain your personal information only for as long as is necessary for the purposes set out
              in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our
              legal obligations, resolve disputes, and enforce our policies.
            </p>

            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you
              wish to be informed what Personal Information we hold about you and if you want it to be removed from our
              systems, please contact us.
            </p>
            <p>In certain circumstances, you have the following data protection rights:</p>
            <ul>
              <li>The right to access, update or to delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <p class="font-bold text-lg mt-4">Log Files</p>

            <p>
              judicodes is hosted on
              <a
                href="https://www.netlify.com/"
                title="Go to Netlify's homepage"
                aria-label="Go to Netlify's homepage"
                target="_blank"
                >Netilify</a
              >
              which follows a standard procedure of using log files. These files log visitors when they visit websites.
              All hosting companies do this and a part of hosting services' analytics. The information collected by log
              files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any
              information that is personally identifiable. The purpose of the information is for analyzing trends,
              administering the site, tracking users' movement on the website, and gathering demographic information.
              The information will be stored for less than 30 days.
            </p>

            <p class="font-bold text-lg mt-4">Third Party Privacy Policies</p>

            <p>
              judicodes's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
              consult the respective Privacy Policies of these third-party ad servers for more detailed information. It
              may include their practices and instructions about how to opt-out of certain options.
            </p>

            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed
              information about cookie management with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <h2>Online Privacy Policy Only</h2>

            <p>
              Our Privacy Policy applies only to our online activities and is valid for visitors to our website with
              regards to the information that they shared and/or collect in judicodes. This policy is not applicable to
              any information collected offline or via channels other than this website.
            </p>

            <h2>Consent</h2>

            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" class="mb-8">
          <DisclosureButton class="styled-disclosure-button">
            <span>Terms of Service</span> <i class="fas fa-chevron-down fa-lg"></i>
          </DisclosureButton>
          <DisclosurePanel class="styled-disclosure-panel">
            <p class="font-bold text-lg mt-4">1. Terms</p>

            <p>
              By accessing this Website, accessible from judicodes.com, you are agreeing to be bound by these Website
              Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local
              laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials
              contained in this Website are protected by copyright and trade mark law.
            </p>

            <p class="font-bold text-lg mt-4">2. Use License</p>

            <p>
              Permission is granted to temporarily download one copy of the materials on judicodes's Website for
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>

            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on judicodes's Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <p>
              This will let judicodes to terminate upon violations of any of these restrictions. Upon termination, your
              viewing right will also be terminated and you should destroy any downloaded materials in your possession
              whether it is printed or electronic format.
            </p>
            <p class="text-sm mt-2">
              These Terms of Service has been created with the help of the
              <a
                href="https://www.termsofservicegenerator.net"
                title="Go to Terms of Service Generator"
                aria-label="Go to Terms of Service Generator"
                target="_blank"
                >Terms Of Service Generator</a
              >.
            </p>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" class="mb-8">
          <DisclosureButton class="styled-disclosure-button">
            <span>Disclaimer</span> <i class="fas fa-chevron-down fa-lg"></i>
          </DisclosureButton>
          <DisclosurePanel class="styled-disclosure-panel">
            <p class="font-bold text-lg mt-4">1. Contents of the website</p>

            <p>
              The contents of this website were written with due diligence and by the author’s best knowledge. We can be
              held liable only by general laws, especially for our own contents acc. § 7 TMG (German law on tele-media)
              and for external contents acc. §§ 8 – 10 TMG. As a Provider of tele-media we can be held liable for
              external contents only once we have knowledge of a concrete infringement of law. We reserve the right to
              change or delete contents of this webpage which are not subject to any contractual obligation.
            </p>

            <p class="font-bold text-lg mt-4">2. Links on external Websites</p>
            <p>
              Contents of external websites on which we are linking direct or indirect (through „hyperlinks“ or
              „deeplinks“) are beyond our responsibility and are not adopted as our own content. When the links were
              published, we didn’t have knowledge of any illegal activities or contents on these websites. Since we do
              not have any control on the contents of these websites, we distance ourselves from all contents of all
              linked websites, which were updated after the setting of the links. For all contents and especially
              damages, resulting of the use of the linked websites, only the provider of these linked websites can be
              held liable. If we receive knowledge of illegal contents on these linked websites, we will delete the
              according links.
            </p>

            <p class="font-bold text-lg mt-4">3. Intellectual property rights</p>
            <p>
              All content of this website, especially texts, pictures, images, graphical presentations, music,
              trademarks, brands and so forth, are subject to copyright laws. The use, reproduction and so on are
              subject to the individual rights of the respective owner of the copyright or administrator of these
              rights. If you want to use such content, please let us know and we will establish contact with the
              respective owner/administrator.
            </p>

            <p class="text-sm mt-2">
              This disclaimer for websites was written by the
              <a
                href="http://www.kanzlei-lachenmann.de/"
                title="Go to Kanzlei Lachenmann Homepage"
                aria-label="Go to Kanzlei Lachenmann Homepage"
                target="_blank"
                >law office of Viola Lachenmann</a
              >.
            </p>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts">
import store from "@/store";
import { Dialog, DialogOverlay, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Dialog, DialogOverlay, Disclosure, DisclosureButton, DisclosurePanel },
  computed: {
    isOpen() {
      return store.state.isLegalModalOpen;
    }
  },
  methods: {
    closeModal: function (): void {
      store.commit("closeLegalModal");
    }
  }
});
</script>

<style scoped>
@layer utilities {
  .styled-disclosure-button {
    @apply flex justify-between w-full px-4 py-2 mb-2 bg-lighttheme-dark dark:bg-darktheme-dark  hover:bg-lighttheme dark:hover:bg-darktheme rounded-lg;
  }

  .styled-disclosure-panel {
    @apply text-gray-500 dark:text-gray-300;
  }

  ul {
    @apply list-disc;
  }
  li {
    @apply ml-4;
  }
}
</style>
