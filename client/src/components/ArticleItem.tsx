import { Box, Card, Image, Text, surface, useModalStore } from '@lifeforge/ui'

import type { NewsArticle } from '..'
import ContentModal from './ContentModal'

function ArticleItem({ item }: { item: NewsArticle }) {
  const { open } = useModalStore()

  return (
    <Card
      isInteractive
      align="center"
      as="article"
      direction={{ base: 'column', md: 'row' }}
      gap="lg"
    >
      <Image
        alt=""
        aspectRatio="16 / 9"
        bg={surface.light}
        fallback="tabler:news"
        fit="cover"
        flexShrink="0"
        overflow="hidden"
        r="lg"
        referrerPolicy="no-referrer"
        src={item.image}
        width={{ base: '100%', md: '24rem' }}
      />
      <Box width="100%">
        <Text as="p" color="primary" mb="sm" size="lg" weight="semibold">
          {item.category}
        </Text>
        <Text as="h3" size="2xl" weight="semibold">
          {item.title}
        </Text>
        <Text
          as="p"
          color={{ base: 'bg-600', dark: 'bg-400' }}
          lineClamp={3}
          mt="md"
        >
          {item.excerpt}
        </Text>
        <Text as="p" color="muted" mt="md">
          {item.time_display}
        </Text>
      </Box>
      <Box
        as="button"
        inset="0"
        position="absolute"
        r="xl"
        onClick={() => {
          open(ContentModal, {
            url: item.link
          })
        }}
      />
    </Card>
  )
}

export default ArticleItem
