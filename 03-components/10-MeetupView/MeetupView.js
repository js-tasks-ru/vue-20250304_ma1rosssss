import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    MeetupCover: MeetupCover,
    MeetupDescription: MeetupDescription,
    MeetupInfo: MeetupInfo,
    MeetupAgenda: MeetupAgenda,
    UiAlert,
    UiContainer,
  },

  props: {
    meetup: Object,
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image"/>


      <!-- Обложка митапа -->

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <MeetupDescription :description="meetup.description" />
            <!-- Описание митапа -->

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <UiAlert v-if="!meetup.agenda.length">
              <p>Программа пока пуста...<p/>
            </UiAlert>
            <MeetupAgenda v-else :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">

            <MeetupInfo   :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
            <!-- Краткая информация о митапе -->

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
