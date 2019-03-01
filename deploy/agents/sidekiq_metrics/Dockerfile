FROM ruby:2.5.3-alpine3.8

ARG UID=991
ARG GID=991

EXPOSE 9292

WORKDIR /rack

RUN apk -U upgrade

COPY Gemfile Gemfile.lock /rack/

RUN bundle install -j$(getconf _NPROCESSORS_ONLN) --deployment --without test development

RUN addgroup -g ${GID} rack && adduser -h /rack -s /bin/sh -D -G rack -u ${UID} rack

COPY . /rack

RUN chown -R rack:rack /rack

USER rack

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0"]
