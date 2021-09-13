<template>
    <div class="event-list">
        <h2>{{ $prismic.asText(slice.primary.headline1) }}</h2>
        <div class="event-list__no-events" :if="noEvents">There are no upcoming events.</div>
        <div class="event-list__list">
            <ul>
                <li v:for="event in events">
                    <div class="event-list__event">
                        <p class="title">{{ event.title }}</p>
                        <p class="date">{{ event.start_date }}</p>
                        <prismic-rich-text :field="event.description" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventList',
    props: {
        slice: Object
    },
    data () {
        return {
            events: null,
            noEvents: false
        }
    },
    methods: {
        getContent () {
            this.$prismic.client.query(
                this.$prismic.Predicates.at('document.type','event')
            )
            .then((events) => {
                if (events) {
                    this.events = events;
                } else {
                    this.noEvents = true
                }
            });
        },
    },
    created () {
        this.getContent();
    }
}
</script>